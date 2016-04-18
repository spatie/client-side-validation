# Client Side Validation

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie-custom/client-side-validation/master.svg?style=flat-square)](https://travis-ci.org/spatie-custom/client-side-validation)
[![Code Climate](https://img.shields.io/codeclimate/github/spatie-custom/client-side-validation.svg?style=flat-square)](https://img.shields.io/codeclimate/github/spatie-custom/client-side-validation.svg)

Our custom, light weight Client side form validation library.

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Install

This package is custom built for [Spatie](https://spatie.be) projects and is therefore not registered on npm. In order to install it via npm you have to go through out registry:

```bash
npm set registry https://npm.spatie.be
npm set ca null
```

Or you can require the package straight from Github:

```bash
npm install spatie-custom/client-side-validation
```

## Usage

```es6
import validation from 'client-side-validation';

validation.init();
```

```html
<!-- Your form requires a `data-validate` attribute. The validation will then be applied on inputs with validation attributes. -->
<form data-validate>
    <input type=text required>
    <input type=email>
    <input type=password minlength=8 maxlength=32>
</form>
```

Currently supported:

- `required`
- `type=email`
- `minlength` & `maxlength`

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please contact [Freek Van der Herten](https://github.com/freekmurze) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie
Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
