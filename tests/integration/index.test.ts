import {afterEach, beforeEach, describe, expect, it, jest} from '@jest/globals';
import * as scaffold from '../../src/scaffold';

import {main} from '../../src';

jest.mock('../../src/scaffold', () => ({
    run: jest.fn(),
}));

describe('CLI Integration Tests', () => {
    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = [
            'node',
            'index.ts',
            '--projectType', 'backend',
            '--language', 'typescript',
            '--framework', 'nestjs',
            '--architecturePattern', 'monolithic',
            '--database', 'mongodb',
            '--projectName', 'testProject'
        ];
    });
    afterEach(() => {
        process.argv = originalArgv;
    });

    it('should call run with correct arguments', async () => {
        await main();

        expect(scaffold.run).toHaveBeenCalledWith(
            expect.objectContaining({
                projectType: 'backend',
                language: 'typescript',
                framework: 'nestjs', // note: adjust according to how your CLI parses arguments
                architecturePattern: 'monolithic',
                database: 'mongodb',
                projectName: 'testProject',
            }),
        );
    });
});
