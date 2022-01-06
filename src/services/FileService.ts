const fs = require('fs');
let obj = {
    data: []
};

export class FileService {
    static async writeToFile(jsonData) {
        fs.exists('storage/jsonFile.json', async (exists) => {
            if (exists) {
                console.log('file exists');
                fs.readFile('storage/jsonFile.json', (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        obj = JSON.parse(data);
                        obj.data.push(jsonData);
                        this.writeData(obj);
                    }
                });
            } else {
                console.log('file does not exist');
                obj.data.push(jsonData);
                await this.writeData(obj);
            }
        }, this);
    }

    private static async writeData(obj: { data: any[] }) {
        try {
            let json = JSON.stringify(obj);
            fs.writeFile('storage/jsonFile.json', json, (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log('Data written to file');
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async readFileData() {
        try {
            return JSON.parse(fs.readFileSync('storage/jsonFile.json'));
        } catch (error) {
            console.log(error);
        }
    }
}
