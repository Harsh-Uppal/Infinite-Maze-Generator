async function LoadDatabase() {
    const config = {
        apiKey: "AIzaSyCxrXk6q8NAdzVLknFN4qhdoszTw8fd6RU",
        authDomain: "infinite-maze-generator.firebaseapp.com",
        projectId: "infinite-maze-generator",
        storageBucket: "infinite-maze-generator.appspot.com",
        messagingSenderId: "525014661063",
        appId: "1:525014661063:web:18d29e9e6c92555c394be2",
        storageBucket: "infinite-maze-generator.appspot.com",
        databaseURL: "https://infinite-maze-generator-default-rtdb.firebaseio.com/"
    };

    firebase.initializeApp(config);
    database = await firebase.database();

    return database;
}