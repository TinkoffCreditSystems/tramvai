import flatten from '@tinkoff/utils/array/flatten';
import isArray from '@tinkoff/utils/is/array';
import { Module, provide } from '@tramvai/core';
import { Meta, Update } from '@tinkoff/meta-tags-generate';
import { COMMAND_LINE_EXECUTION_END_TOKEN } from '@tramvai/tokens-core-private';
import { transformValue } from './transformValue';
import type { PageSeoProperty } from './shared';
import { sharedProviders } from './shared';
import { converters } from './converters/converters';
import { META_UPDATER_TOKEN, META_DEFAULT_TOKEN, META_WALK_TOKEN } from './tokens';
import type { SeoModuleOptions } from './types';

export * from './constants';
export * from './tokens';

declare module '@tramvai/react' {
  export interface PageComponentOptions {
    seo?: PageSeoProperty;
  }
}

@Module({
  providers: [
    ...sharedProviders,
    provide({
      // Update meta only when all actions were completed.
      provide: COMMAND_LINE_EXECUTION_END_TOKEN,
      multi: true,
      useFactory: () => {
        return function updateMeta(di, type, status) {
          if (type === 'client' && status === 'afterSpa') {
            // We can't use dependencies below as factory provider dependencies
            // due to dependency cycle when using `@tramvai-tinkoff/module-router`.
            const meta = new Meta({
              list: flatten(
                di.get({ token: META_UPDATER_TOKEN, optional: true, multi: true }) || []
              ),
              metaWalk: di.get(META_WALK_TOKEN),
              transformValue,
              converters,
            });

            new Update(meta).update();
          }
        };
      },
    }),
  ],
})
export class SeoModule {
  static forRoot(options: SeoModuleOptions) {
    // легаси ветка для старого формата
    // TODO: убрать
    if (isArray(options)) {
      return {
        mainModule: SeoModule,
        providers: [
          {
            provide: 'metaList',
            useValue: options,
            multi: true,
          },
        ],
      };
    }

    const { metaUpdaters, metaDefault } = options;
    const providers = [];

    if (metaDefault) {
      providers.push({
        provide: META_DEFAULT_TOKEN,
        useValue: metaDefault,
      });
    }

    if (metaUpdaters) {
      providers.push({
        provide: META_UPDATER_TOKEN,
        useValue: metaUpdaters,
        multi: true,
      });
    }

    return {
      providers,
      mainModule: SeoModule,
    };
  }
}
