# NameAsYouWish

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Service Test 

 full cover of `PropertyListService`

## Unit Test

`AppComponent` check modal open/close
`AddPropertyDummyFormComponent` add property action

## Validations

no error validations for effects
no validation for forms (reqiure validation don't count)
no validation messages

## Material Components

`MatListModule`, `MatInputModule`,`MatDialogModule`,`MatButtonModule`,`MatFormFieldModule`

## Dummy-object and dummy-array component

as I had doubs what you mean with `The main page should have a list of (dummy data) properties which can be added to, removed and updated via a dialogue window` I made two components (Dummy-object iterates value as object and dummy-array iterates an array of values (name, value))

made two buttons on main page `Add new property` adds to list which works with localstorage and `add new property to object` which works directly with dummies-objects
