const mongoose = require("mongoose");

const connectToDatabase = async () => {
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

DB_URL = mongodb+srv:admin:AGRaaSYtpX8LExiX@fsctaskmanagercluster.pzv3f.mongodb.net/?retryWrites=true&w=majority&appName=FscTaskManagerCluster), no arquivo mongoose.database assim(const mongoose = require("mongoose"); const connectToDatabase = async () => { try { (await mongoose.connect(process.env.DB_URL)).isObjectIdOrHexString( console.log("MongoDB conectado com sucesso!") ); } catch (error) { console.log("Erro ao conectar no MongoDB"); } }; module.exports = connectToDatabase;)