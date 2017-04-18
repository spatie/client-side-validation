import $ from 'jquery';
import ErrorBag from './ErrorBag';
import { validateInput, clearInputError, updateInputError } from './inputHandlers';

const validation = {

    init() {

        $('[data-validate] input').on('keyup paste blur', function() {

            updateInputError($(this));

        });


        $('[data-validate]').on('submit', function(e) {

            const formErrors = new ErrorBag();

            $('input', $(this)).each(function () {

                const errors = updateInputError($(this));

                formErrors.merge(errors);

            });

            if (formErrors.hasErrors()) {
                e.preventDefault();
            }

        });
    },
};

export const init = validation.init;

export default validation;
