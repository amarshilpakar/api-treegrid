import {FileService} from "../services/FileService";

export class TreeGridController {

    async getList(req, res) {
        try {
            await this.saveData(req, res);
            return res.status(200).send({message: "OK"})
        } catch (error) {
            return res.status(500).send({message: "Internal server error"});
        }
    }

    async saveData(req, res) {
        try {
            let student = {
                name: 'Mike1',
                age: 24,
                gender: 'Male',
                department: 'English',
                car: 'Honda'
            };
            await FileService.writeToFile(student);
            return res.status(200).send({message: "OK"})
        } catch (error) {
            return res.status(500).send({message: "Internal server error"});
        }
    }

    async getFileData(req, res) {
        try {
            let data = await FileService.readFileData();
            return res.status(200).send({message: "Data loaded successfully.", payload: data});
        } catch (error) {
            return res.status(500).send({message: "Internal server error"});
        }
    }


}
