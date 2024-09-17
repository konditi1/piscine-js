import { readdir } from "fs/promises";

const tellMeHowMany = async () => {
    try {
        let path = process.argv;
        if (path.length < 3) {
            path = process.cwd();
        } else {
            path = path[2];
            const files = await readdir(path);
            console.log(files.length);
        }
    } catch (error) {
        console.log(error);
    }
};

tellMeHowMany();