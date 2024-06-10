'use strict';

/**
 * academic-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academic-record.academic-record');
