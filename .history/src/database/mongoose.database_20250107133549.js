const mongoose = require("mongoose");

constconnectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oln32cq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
};

module.exports = connectToDatabase;
