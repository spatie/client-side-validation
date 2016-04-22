import $ from 'jquery';
import ErrorBag from './ErrorBag';
import { validateInput, clearInputError, updateInputError } from './inputHandlers';

const validation = {

    init() {

        $('[data-validate] input').on('keyup paste', function() {

            const $input = $(this);

            if (validateInput($input).isEmpty()) {
                clearInputError($input);
            }

        });

        $('[data-validate] input').on('blur', function() {

            const $input = $(this);

            updateInputError($input, validateInput($input));

        });

        $('[data-validate]').on('submit', function(e) {

            const formErrors = new ErrorBag();

            $('input', $(this)).each(function () {

                const $input = $(this);
                const errors = validateInput($input);

                formErrors.merge(errors);

                updateInputError($input, errors);

            });

            if (formErrors.hasErrors()) {
                e.preventDefault();
            }

        });
    },
};

export const init = validation.init;

export default validation;
