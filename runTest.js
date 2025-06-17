function testar(titulo, fn) {
    try {
        fn();
        console.log(`✅ ${titulo}`);
    } catch (e) {
        console.error(`❌ ${titulo} - ${e.message}`);
    }
}