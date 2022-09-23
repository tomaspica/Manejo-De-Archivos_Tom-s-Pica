import fs from fs

class Container{
    constructor(fileName){
        this.filePath = `./src/db/${fileName}.json`;
    }

    async getAll(){
        try{
            const file = await fs.promises.readFile(this.filePath, "utf8");
            const elements = JSON.parse(file);

            return elements;
        } catch (error) {
            if (error.code === "ENOENT") {
                await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3));
                return [];
            }
        }
    }
}


export { Container };