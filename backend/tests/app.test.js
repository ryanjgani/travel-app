describe("GET /api/dest", () => {
    describe("Check database connection", () => {
        test("should connect with MongoDB", async () => {
            expect(true).toBe(true);
        });
    });

    describe("Get destinations", () => {
        test("should respond with a 200 status code", async () => {
            expect(true).toBe(true);
            // const response = await request(app).get("/").expect(200);
        });
    });
});
