
# Alibaba Entrance Assignment

There are 5 components:

- AppContainer : main layout components
- List : suggestion list
- Chips : for tags
- BaseTextInput
- TagInput: main designed component

Entry point to review: App.vue

### MocK seerver
Server will serve on port 4000 by default, you can change values in folder mock-data

To simplify I used hotel names for dataSource for taginput component

### Sample data

``` json
[
    {
        "id": 1,
        "name": "Espinas"
    },
    {
        "id": 2,
        "name": "Abasi"
    },
    {
        "id": 3,
        "name": "Jahan"
    },
    {
        "id": 4,
        "name": "Iran"
    },
    {
        "id": 5,
        "name": "Piroozi"
    },
    {
        "id": 6,
        "name": "Esteghlal"
    },
    {
        "id": 7,
        "name": "Aseman"
    }
]

```
## Demo

Demo at http://88.135.36.10:8080


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ALIBABA_BASE_URL`


## Run Locally

Clone the project

```bash
  git clone https://github.com/alirezakhosraviyan/vue3-taglist.git
```

Go to the project directory

```bash
  cd vue3-taglist
```

Install dependencies

```bash
  npm install
```

Start the server

```bash

*** IMPORTANT : please bypass CORS on your browser to accss mock server **
  npm run mock
```


Start the Client

```bash
  npm run serve 
```




## Tech Stack

**Client:** Vue3, Vuex, SCSS

**Server:** mockserver


## Supported User stories

- As a user, I need to be able to *See a list of filtered suggestions*, When the text box is focused, and *I write one or more characters.*
- As a user, I need to be able to *Add the first tag from suggestions.* When the text box is focused, the first suggestion is highlighted, and *I hit enter.*
- As a user, I need to be able to *Change the highlighted suggestion to the next one.* When the text box is focused, and *I hit the down arrow.*
- As a user, I need to be able to *Change the highlighted suggestion to the previous one.* When the text box is focused, and *I hit the up arrow.*
- As a user, I need to be able to *Add the highlighted suggestion. I hit the enter.*
- As a user, I need to be able to *Add a new tag.* When the text box is focused, *I write "Sample value", There is no suggestion, and I hit enter.*
- As a user, I need to be able to *Add a new tag* When the suggestions are visible, and *I click on a tag from the suggestions list.*
- As a user, I need to be able to *Close the suggestions list.*  When the suggestions are visible, and *I hit escape.*
- As a user, I need to be able to *Close the suggestions list.*  When the suggestions are visible, and *I click outside of the text input or suggestions list.*
- As a user, I need to be able to *Close the suggestions list,*  When the suggestions are visible, and *I blur on the text input.*


## Known Issues because of limited Time
I don't have enough time according to my agenda to implement all features of my assignment! Tnx for understanding in advance!
- list scroll
- add new tag by ',' 
- Testing by storybook

## Author

- [@alirezakhosraviyan](https://github.com/alirezakhosraviyan)


## License

[MIT](https://choosealicense.com/licenses/mit/)

