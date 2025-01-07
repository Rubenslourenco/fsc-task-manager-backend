const mongoose = require("mongoose");

const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.e7mt8.mongodb.net/?retryWrites=true&w=majority&appName=fscTaskManagerCluster`
        );
        console.log("Conectado ao MongoDB com sucesso.");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToDatabase;
