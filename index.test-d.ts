import {expectType, expectError} from 'tsd';
import {
	findUp,
	findUpSync,
	findUpMultiple,
	findUpMultipleSync,
	findUpStop,
	pathExists,
	pathExistsSync,
} from './index.js';

expectType<Promise<string | undefined>>(findUp('unicorn.png'));
expectType<Promise<string | undefined>>(findUp('unicorn.png', {cwd: ''}));
expectType<Promise<string | undefined>>(findUp('unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png']));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png'], {cwd: ''}));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png'], {allowSymlinks: true}));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png'], {allowSymlinks: false}));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png'], {type: 'file'}));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png'], {type: 'directory'}));
expectType<Promise<string | undefined>>(findUp(['rainbow.png', 'unicorn.png'], {stopAt: 'foo'}));
expectError(findUp(['rainbow.png', 'unicorn.png'], {concurrency: 1}));

expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png'));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {cwd: ''}));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {allowSymlinks: true}));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {allowSymlinks: false}));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {type: 'file'}));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {type: 'directory'}));
expectType<Promise<string | undefined>>(findUp(() => 'unicorn.png', {stopAt: 'foo'}));
expectType<Promise<string | undefined>>(findUp(() => undefined));
expectType<Promise<string | undefined>>(findUp(() => undefined, {cwd: ''}));
expectType<Promise<string | undefined>>(findUp(() => undefined, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string | undefined>>(findUp(() => undefined, {allowSymlinks: true}));
expectType<Promise<string | undefined>>(findUp(() => undefined, {allowSymlinks: false}));
expectType<Promise<string | undefined>>(findUp(() => undefined, {type: 'file'}));
expectType<Promise<string | undefined>>(findUp(() => undefined, {type: 'directory'}));
expectType<Promise<string | undefined>>(findUp(() => undefined, {stopAt: 'foo'}));
expectType<Promise<string | undefined>>(findUp((): typeof findUpStop => findUpStop));
expectType<Promise<string | undefined>>(findUp((): typeof findUpStop => findUpStop, {cwd: ''}));
expectType<Promise<string | undefined>>(findUp((): typeof findUpStop => findUpStop, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string | undefined>>(findUp((): typeof findUpStop => findUpStop, {stopAt: 'foo'}));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png'));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png', {cwd: ''}));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png', {allowSymlinks: true}));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png', {allowSymlinks: false}));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png', {type: 'file'}));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png', {type: 'directory'}));
expectType<Promise<string | undefined>>(findUp(async () => 'unicorn.png', {stopAt: 'foo'}));
expectType<Promise<string | undefined>>(findUp(async () => undefined));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {cwd: ''}));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {allowSymlinks: true}));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {allowSymlinks: false}));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {type: 'file'}));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {type: 'directory'}));
expectType<Promise<string | undefined>>(findUp(async () => undefined, {stopAt: 'foo'}));

expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {cwd: ''}));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {allowSymlinks: true}));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {allowSymlinks: false}));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {type: 'file'}));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {type: 'directory'}));
expectType<Promise<string | undefined>>(findUp(async (): Promise<typeof findUpStop> => findUpStop, {stopAt: 'foo'}));

expectType<Promise<string[]>>(findUpMultiple('unicorn.png'));
expectType<Promise<string[]>>(findUpMultiple('unicorn.png', {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple('unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png']));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {allowSymlinks: true}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {allowSymlinks: false}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {type: 'file'}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {type: 'directory'}));
expectType<Promise<string[]>>(findUpMultiple(['rainbow.png', 'unicorn.png'], {stopAt: 'foo'}));
expectError(findUpMultiple(['rainbow.png', 'unicorn.png'], {concurrency: 1}));

expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png'));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {allowSymlinks: true}));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {allowSymlinks: false}));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {type: 'file'}));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {type: 'directory'}));
expectType<Promise<string[]>>(findUpMultiple(() => 'unicorn.png', {stopAt: 'foo'}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {allowSymlinks: true}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {allowSymlinks: false}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {type: 'file'}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {type: 'directory'}));
expectType<Promise<string[]>>(findUpMultiple(() => undefined, {stopAt: 'foo'}));
expectType<Promise<string[]>>(findUpMultiple((): typeof findUpStop => findUpStop));
expectType<Promise<string[]>>(findUpMultiple((): typeof findUpStop => findUpStop, {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple((): typeof findUpStop => findUpStop, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple((): typeof findUpStop => findUpStop, {stopAt: 'foo'}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png'));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {allowSymlinks: true}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {allowSymlinks: false}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {type: 'file'}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {type: 'directory'}));
expectType<Promise<string[]>>(findUpMultiple(async () => 'unicorn.png', {stopAt: 'foo'}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {allowSymlinks: true}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {allowSymlinks: false}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {type: 'file'}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {type: 'directory'}));
expectType<Promise<string[]>>(findUpMultiple(async () => undefined, {stopAt: 'foo'}));

expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {cwd: ''}));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {cwd: new URL('file:///path/to/cwd/')}));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {allowSymlinks: true}));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {allowSymlinks: false}));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {type: 'file'}));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {type: 'directory'}));
expectType<Promise<string[]>>(findUpMultiple(async (): Promise<typeof findUpStop> => findUpStop, {stopAt: 'foo'}));

expectType<string | undefined>(findUpSync('unicorn.png'));
expectType<string | undefined>(findUpSync('unicorn.png', {cwd: ''}));
expectType<string | undefined>(findUpSync('unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png']));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {cwd: ''}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {cwd: new URL('file:///path/to/cwd/')}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {allowSymlinks: true}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {allowSymlinks: false}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {type: 'file'}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {type: 'directory'}));
expectType<string | undefined>(findUpSync(['rainbow.png', 'unicorn.png'], {stopAt: 'foo'}));

expectType<string | undefined>(findUpSync(() => 'unicorn.png'));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {cwd: ''}));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {allowSymlinks: true}));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {allowSymlinks: false}));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {type: 'file'}));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {type: 'directory'}));
expectType<string | undefined>(findUpSync(() => 'unicorn.png', {stopAt: 'foo'}));
expectType<string | undefined>(findUpSync(() => undefined));
expectType<string | undefined>(findUpSync(() => undefined, {cwd: ''}));
expectType<string | undefined>(findUpSync(() => undefined, {cwd: new URL('file:///path/to/cwd/')}));
expectType<string | undefined>(findUpSync(() => undefined, {allowSymlinks: true}));
expectType<string | undefined>(findUpSync(() => undefined, {allowSymlinks: false}));
expectType<string | undefined>(findUpSync(() => undefined, {type: 'file'}));
expectType<string | undefined>(findUpSync(() => undefined, {type: 'directory'}));
expectType<string | undefined>(findUpSync(() => undefined, {stopAt: 'foo'}));
expectType<string | undefined>(findUpSync((): typeof findUpStop => findUpStop));
expectType<string | undefined>(findUpSync((): typeof findUpStop => findUpStop, {cwd: ''}));
expectType<string | undefined>(findUpSync((): typeof findUpStop => findUpStop, {cwd: new URL('file:///path/to/cwd/')}));
expectType<string | undefined>(findUpSync((): typeof findUpStop => findUpStop, {type: 'file'}));
expectType<string | undefined>(findUpSync((): typeof findUpStop => findUpStop, {type: 'directory'}));
expectType<string | undefined>(findUpSync((): typeof findUpStop => findUpStop, {stopAt: 'foo'}));

expectType<string[]>(findUpMultipleSync('unicorn.png'));
expectType<string[]>(findUpMultipleSync('unicorn.png', {cwd: ''}));
expectType<string[]>(findUpMultipleSync('unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png']));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {cwd: ''}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {cwd: new URL('file:///path/to/cwd/')}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {allowSymlinks: true}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {allowSymlinks: false}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {type: 'file'}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {type: 'directory'}));
expectType<string[]>(findUpMultipleSync(['rainbow.png', 'unicorn.png'], {stopAt: 'foo'}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png'));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {cwd: ''}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {cwd: new URL('file:///path/to/cwd/')}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {allowSymlinks: true}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {allowSymlinks: false}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {type: 'file'}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {type: 'directory'}));
expectType<string[]>(findUpMultipleSync(() => 'unicorn.png', {stopAt: 'foo'}));
expectType<string[]>(findUpMultipleSync(() => undefined));
expectType<string[]>(findUpMultipleSync(() => undefined, {cwd: ''}));
expectType<string[]>(findUpMultipleSync(() => undefined, {cwd: new URL('file:///path/to/cwd/')}));
expectType<string[]>(findUpMultipleSync(() => undefined, {allowSymlinks: true}));
expectType<string[]>(findUpMultipleSync(() => undefined, {allowSymlinks: false}));
expectType<string[]>(findUpMultipleSync(() => undefined, {type: 'file'}));
expectType<string[]>(findUpMultipleSync(() => undefined, {type: 'directory'}));
expectType<string[]>(findUpMultipleSync(() => undefined, {stopAt: 'foo'}));
expectType<string[]>(findUpMultipleSync((): typeof findUpStop => findUpStop));
expectType<string[]>(findUpMultipleSync((): typeof findUpStop => findUpStop, {cwd: ''}));
expectType<string[]>(findUpMultipleSync((): typeof findUpStop => findUpStop, {cwd: new URL('file:///path/to/cwd/')}));
expectType<string[]>(findUpMultipleSync((): typeof findUpStop => findUpStop, {type: 'file'}));
expectType<string[]>(findUpMultipleSync((): typeof findUpStop => findUpStop, {type: 'directory'}));
expectType<string[]>(findUpMultipleSync((): typeof findUpStop => findUpStop, {stopAt: 'foo'}));

expectType<Promise<boolean>>(pathExists('unicorn.png'));
expectType<boolean>(pathExistsSync('unicorn.png'));
