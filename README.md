# Form POC

The object of this Form POC is to show that it is possible to use a common form library based on Formik with both mobile and web clients, while being able to use standardized field components.

## Formik vs React Final Form

`Formik` and `React Final Form` are very similar libraries. However, as far as I can tell, `React Final Form` is a bit more sophisticated. Specifically, it has a number of features that `Formik` doesn't seem to have. These I consider relevant:

- Promise based form submission processing
- Field level format: Format a string, e.g. as a phone number field
- Field level parse: Parse a string entered in a field so that it ends up in the store (and before validation) as something else, e.g. parse an entered date and store it as a date object.

## Fields

There are a number of ways to work with Formik but the one that makes the most sense is using the `Field` component to define a form field. It's an abstraction that allows any kind of form component, native or higher level, to be referenced as the implementation of a form field. Working with Fields allows you to create abstractions that work both on `Web` and `Native` and that contain no platform specific code.

## Specific fields

The example contains a couple of specific fields `PONumberField`, `RefNumberField` and `VehicleIssueField` with the idea of implementing local business logic so that these fields can be re-used. The business logic itself hasn't been implemented at a detailed level, but, it shows how it could be done.

## Wrapping the default Formik functionality with a higher level Form object

In the POC I wrapped the standard Formik form with an object called StandardForm that supports a couple of additional features on top of the standard.
In general I think this makes sense in order to both extend the out of the box but also create sensible defaults. One area that could be useful is to create a debug component that outputs the form state to a debug environment (screen or DevTools).

## React Native vs Web

At the end of the day there will always be low level differences between Native and Web. E.g. the `input` primitive for the web, is called `TextIput` on React Native. In order to have a generic abstraction I made the distinction between `components/form` and `components/form-primitives`. `components/form` will be cross platform and will reference `components/form-primitives`, which will be platform specific. As long as the names used for `components/form-primitives` are identical, it will be easy to switch them out.

It's also conceivable to reference some kind of identifier that would allow us to reference whether the environment is Native or Web and load the correct primitive on the fly. https://github.com/necolas/react-native-web is a package that does that. It might be a bit overkill to try to implement that though.

It would be just as easy to create a `@joinswoop/native` and `@joinswoop/web` package. As long as the interfaces are identical, forms could be reused with little adjustment.

## React Native vs Web: Form submission

One area where React Native and Web differ is in the way forms are submitted. The common way with Web is to use `<form onSubmit={handleSubmit}>` and with Native it's `<Button onPress={handleSubmit}>`. If this is considered an issue, you could replace `<form onSubmit={handleSubmit}>` with a generic `<Button>` component in order to keep the code even more aligned.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
