const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://adm:*F662Ap25w6Z3U*@fsctaskmanagercluster.e7mt8.mongodb.net/?retryWrites=true&w=majority&appName=fscTaskManagerCluster`
        );
        console.log("Conectado ao MongoDB com sucesso.");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToDatabase;
