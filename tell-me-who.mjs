import { readdir } from "fs/promises";
const tellMeWho = async (path) => {
    try {
        const files = await readdir(path);
        const unSortedNames = []
        for (const file of files) {
            unSortedNames.push(
                file.split(".")[0].split("_").reverse().join("-")
            );
            
        }

        let sortedNames = unSortedNames.sort()
        for (let i = 0; i < sortedNames.length; i++) {
            let name = sortedNames[i]
            name = name.replace("-", " ")
            console.log((i+1) + ". " + name)
        }
    } catch (error) {
        console.error(error);
    }
}

tellMeWho(process.argv[2])