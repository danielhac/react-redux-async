import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authors = [
    {
        id: 'callaway-coastal',
        wineName: 'Callaway Coastal'
    },
    {
        id: 'challis-lane',
        wineName: 'Challis Lane'
    },
    {
        id: 'fog-head',
        wineName: 'Fog Head'
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
    return author.wineName;
};

class AuthorApi {
    static getAllAuthors() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], authors));
            }, delay);
        });
    }

    static saveAuthor(author) {
        author = Object.assign({}, author); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minWineNameLength = 3;
                if (author.wineName.length < minWineNameLength) {
                    reject(`First Name must be at least ${minWineNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    author.id = generateId(author);
                    authors.push(author);
                }

                resolve(author);
            }, delay);
        });
    }

    static deleteAuthor(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = authors.findIndex(author => {
                    author.id == authorId;
                });
                authors.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default AuthorApi;