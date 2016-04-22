import $ from 'jquery';
import ErrorBag from './ErrorBag';
import { validateInput, clearInputError, setInputError } from './inputHandlers';

export const init = () => {

    // Separation of event types
    // Add Paste event

    $('[data-validate] input').on('keyup paste', function() {

        const $input = $(this);
        const errors = validateInput($input);

        if (errors.isEmpty()) {
            clearInputError($input);
        }

    });

    $('[data-validate] input').on('blur', function() {

        const $input = $(this);
        const errors = validateInput($input);

        if (errors.hasErrors()) {
            setInputError($input, errors.last());
        }
    });


    $('[data-validate]').on('submit', function(e) {

        const formErrors = new ErrorBag();

        // $.each personal preference...

        $('input', $(this)).each(function(){

            // This block is same as 'blur' checking: extract?

            const $input = $(this);
            const errors = validateInput($input);

            if (errors.hasErrors()) {
                setInputError($input, errors.last());
            }

            // End block

            formErrors.merge(errors);

        });

        if (formErrors.hasErrors()) {
            e.preventDefault();
        }
    });
};

export default init;
