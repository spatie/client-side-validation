import ErrorBag from './ErrorBag';
import { parseMessage } from './messages';
import { validate } from './validate';

export const validateInput = $input => {

    const errors = new ErrorBag();

    if ($input.is('[minlength]') && !validate.min($input.val(), parseInt($input.attr('minlength')))) {
        errors.add(['minlength', {amount: parseInt($input.attr('minlength'))}]);
    }

    if ($input.is('[maxlength]') && !validate.max($input.val(), parseInt($input.attr('maxlength')))) {
        errors.add(['maxlength', {amount: parseInt($input.attr('maxlength'))}]);
    }

    if ($input.is('[type=email]') && !validate.email($input.val())) {
        errors.add(['email']);
    }

    if ($input.is('[required]') && !validate.required($input.val(), 'required')) {
        errors.add(['required']);
    }

    return errors;
};

const getInputError = $input => {

    const dataKey = 'validation-error-placeholder';

    if ($input.data(dataKey)) {
        return $input.data(dataKey);
    }

    const $placeholder = $input.parents('[data-validate]')
        .find(`[data-validation-error="${$input.attr('name')}"]`);

    $input.data(dataKey, $placeholder);

    return $placeholder;
};

export const clearInputError = $input => {
    $input.removeClass('is-invalid')
        .addClass('is-valid');
    getInputError($input).text('');
};

export const setInputError = ($input, error) => {
    $input.removeClass('is-valid')
        .addClass('is-invalid');
    getInputError($input).text(parseMessage(error[0], error[1]));
};

export const updateInputError = $input => {

    const errors = validateInput($input);

    if (errors.isEmpty()) {
        clearInputError($input);
        return;
    }

    setInputError($input, errors.last());

    return errors;
};
