import {cleanuptotal} from "wdio-cleanuptotal-service";

describe("Cleanup suite", ()=> {
    it("Cleanup success", ()=> {
        console.log("Create user1");
        cleanuptotal.addCleanup(()=> { console.log("Deleting user1"); throw new Error("Intentional error in user creation");});

        console.log("Create investment plan1");
        cleanuptotal.addCleanup(()=> { console.log("Deleting investment plan1"); throw new Error("Intentional error in investment plan creation");});

        console.log("deposit funds $1000");
        cleanuptotal.addCleanup(()=> console.log("Removing funds $1000"));

        expect(5).toEqual(2 + 3);
    });

    it("Cleanup failure", ()=> {
        console.log("Create user2");
        cleanuptotal.addCleanup(()=> console.log("Deleting user2"));

        console.log("Create investment plan2");
        cleanuptotal.addCleanup(()=> console.log("Deleting investment plan2"));

        console.log("deposit funds $2000");
        cleanuptotal.addCleanup(()=> console.log("Removing funds $2000"));

        expect(5).toEqual(2 + 2);
    })
})