const ManageBooksPage = require("../pageobjects/manageBooks.page");
const NewBookPage = require("../pageobjects/newBook.page");
const bookTitle = "How to Cook Pancakes";

describe("Manage bookshop", () => {
    it("Create a new book", async () => {
        await ManageBooksPage.iClickOnCreateNewBook();
        await NewBookPage.iEnterTitle(bookTitle);
        await NewBookPage.iSelectGenre();
        await NewBookPage.iSelectAuthor();
        await NewBookPage.iPressCreate();
        await NewBookPage.iSeeEditButton();
    });

    it("Should check book is added", async () => {
        await NewBookPage.iNavigateBack();
        await ManageBooksPage.theBookListContains(bookTitle);
    });
});