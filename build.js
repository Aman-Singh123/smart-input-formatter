import esbuild from 'esbuild';

try {
    // ESM build
    await esbuild.build({
        entryPoints: ['src/index.js'],
        outfile: 'dist/esm/index.js',
        bundle: true,
        format: 'esm',
        sourcemap: true,
        target: ['esnext'],
        platform: 'neutral',
    });

    // CommonJS build
    await esbuild.build({
        entryPoints: ['src/index.js'],
        outfile: 'dist/cjs/index.cjs',
        bundle: true,
        format: 'cjs',
        sourcemap: true,
        target: ['node14'],
        platform: 'node',
    });

    console.log('Build completed successfully.');
} catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
}
