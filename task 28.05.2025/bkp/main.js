/*!
 * Start Bootstrap - SB Admin v7.0.0 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

$(document).ready(function() {
    $('.registration-form input[type=submit]').click(function() {
        setTimeout(function() {
            $('.input-group .form-control.error').parent().addClass('error-field');
            $('.input-group .form-select.error').parent().addClass('error-field');
        }, 2000);
    });

    $('.sb-sidenav-menu .nav-link.collapsed + .collapse').removeClass('show');

    $(".input-group input[data-validation=required], .input-group select[data-validation=required], .input-group input[data-validation='required,sameAs(password)'], .input-group input[data-validation='required,uniqueInDb,mustNotInclude(space)']").on('input focusout', function(e) {
        if ($(this).val()) {
            $(this).parent().removeClass('error-field');
        } else {
            $(this).parent().addClass('error-field');
        };
    });

    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    $(".input-group input[data-validation='required,email']").on('input focusout', function(e) {
        var userinput = $(this).val();
        if ($(this).val()) {
            if (!pattern.test(userinput)) {
                $(this).parent().addClass('error-field');
            } else {
                $(this).parent().removeClass('error-field');
            };
        } else {
            $(this).parent().addClass('error-field');
        };
    });



    // manuscript submition form start
    jQuery('.conflict-interest-checked').on('change', function() {
        if ($(this).is(':checked')) {
            jQuery('.conflict-interest-field').removeAttr('disabled');
        }
    });
    jQuery('.conflict-interest-unchecked').on('change', function() {
        if ($(this).is(':checked')) {
            jQuery('.conflict-interest-field').attr('disabled', 'disabled');
            jQuery('.conflict-interest-field').val('');
        }
    });

    if ($('.conflict-interest-checked').is(':checked')) {
        jQuery('.conflict-interest-field').removeAttr('disabled');
    }
    if ($('.conflict-interest-unchecked').is(':checked')) {
        jQuery('.conflict-interest-field').attr('disabled', 'disabled');
        jQuery('.conflict-interest-field').val('');
    }


    jQuery('.more-additional-file-button').click(function(e) {
        e.preventDefault();
        jQuery(this).parent().hide();
        jQuery('.more-additional-file-row').css('display', 'flex');

    });
    // manuscript submition form end

    // typo3 pagination
    jQuery('.site-data-table .f3-widget-paginator').addClass('justify-content-center');
    jQuery('.f3-widget-paginator').addClass('pagination');
    jQuery('.f3-widget-paginator > li').addClass('page-item');
    jQuery('.f3-widget-paginator > li > a').addClass('page-link');
    jQuery('.f3-widget-paginator > li.current').addClass('active');
    jQuery('.f3-widget-paginator > li.current').wrapInner('<a href"#"></a>');
    jQuery('.f3-widget-paginator > li.current > a').addClass('page-link');


    // site data table for smaller screens
    jQuery(' .site-data-table > .pagination + .table > tbody > tr > td, .site-data-table > .table > tbody > tr > td').each(function(){
        jQuery(this).prepend('<i></i>');
        var DATAHEAD = jQuery(this).attr('data-table-head');
        jQuery(this).find('i').html(DATAHEAD);
      });

});