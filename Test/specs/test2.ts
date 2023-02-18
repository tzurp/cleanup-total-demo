import {cleanuptotal} from "wdio-cleanuptotal-service"

describe("Cleanup suite", ()=> {
    it("Cleanup success2", ()=> {
        console.log("Create user3");
        cleanuptotal.addCleanup(()=> console.log("Deleting user3"));

        console.log("Create investment plan3");
        cleanuptotal.addCleanup(()=> console.log("Deleting investment plan3"));

        console.log("deposit funds $3000");
        cleanuptotal.addCleanup(()=> console.log("Removing funds $3000"));

        expect(5).toEqual(2 + 3);
    })
})