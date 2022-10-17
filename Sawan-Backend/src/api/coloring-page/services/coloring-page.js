'use strict';

/**
 * coloring-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coloring-page.coloring-page');
