/*
 * This file is generated by jOOQ.
 */
package com.cellarhq.generated.tables.daos;


import com.cellarhq.generated.tables.Drink;
import com.cellarhq.generated.tables.records.DrinkRecord;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import javax.annotation.processing.Generated;

import org.jooq.Configuration;
import org.jooq.JSON;
import org.jooq.impl.DAOImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.12.3"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class DrinkDao extends DAOImpl<DrinkRecord, com.cellarhq.generated.tables.pojos.Drink, Long> {

    /**
     * Create a new DrinkDao without any configuration
     */
    public DrinkDao() {
        super(Drink.DRINK, com.cellarhq.generated.tables.pojos.Drink.class);
    }

    /**
     * Create a new DrinkDao with an attached configuration
     */
    public DrinkDao(Configuration configuration) {
        super(Drink.DRINK, com.cellarhq.generated.tables.pojos.Drink.class, configuration);
    }

    @Override
    public Long getId(com.cellarhq.generated.tables.pojos.Drink object) {
        return object.getId();
    }

    /**
     * Fetch records that have <code>id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(Drink.DRINK.ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchById(Long... values) {
        return fetch(Drink.DRINK.ID, values);
    }

    /**
     * Fetch a unique record that has <code>id = value</code>
     */
    public com.cellarhq.generated.tables.pojos.Drink fetchOneById(Long value) {
        return fetchOne(Drink.DRINK.ID, value);
    }

    /**
     * Fetch records that have <code>version BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfVersion(Integer lowerInclusive, Integer upperInclusive) {
        return fetchRange(Drink.DRINK.VERSION, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>version IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByVersion(Integer... values) {
        return fetch(Drink.DRINK.VERSION, values);
    }

    /**
     * Fetch records that have <code>photo_id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfPhotoId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(Drink.DRINK.PHOTO_ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>photo_id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByPhotoId(Long... values) {
        return fetch(Drink.DRINK.PHOTO_ID, values);
    }

    /**
     * Fetch records that have <code>organization_id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfOrganizationId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(Drink.DRINK.ORGANIZATION_ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>organization_id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByOrganizationId(Long... values) {
        return fetch(Drink.DRINK.ORGANIZATION_ID, values);
    }

    /**
     * Fetch records that have <code>style_id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfStyleId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(Drink.DRINK.STYLE_ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>style_id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByStyleId(Long... values) {
        return fetch(Drink.DRINK.STYLE_ID, values);
    }

    /**
     * Fetch records that have <code>glassware_id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfGlasswareId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(Drink.DRINK.GLASSWARE_ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>glassware_id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByGlasswareId(Long... values) {
        return fetch(Drink.DRINK.GLASSWARE_ID, values);
    }

    /**
     * Fetch records that have <code>drink_type BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfDrinkType(String lowerInclusive, String upperInclusive) {
        return fetchRange(Drink.DRINK.DRINK_TYPE, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>drink_type IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByDrinkType(String... values) {
        return fetch(Drink.DRINK.DRINK_TYPE, values);
    }

    /**
     * Fetch records that have <code>slug BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfSlug(String lowerInclusive, String upperInclusive) {
        return fetchRange(Drink.DRINK.SLUG, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>slug IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchBySlug(String... values) {
        return fetch(Drink.DRINK.SLUG, values);
    }

    /**
     * Fetch records that have <code>name BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfName(String lowerInclusive, String upperInclusive) {
        return fetchRange(Drink.DRINK.NAME, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>name IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByName(String... values) {
        return fetch(Drink.DRINK.NAME, values);
    }

    /**
     * Fetch records that have <code>description BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfDescription(String lowerInclusive, String upperInclusive) {
        return fetchRange(Drink.DRINK.DESCRIPTION, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>description IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByDescription(String... values) {
        return fetch(Drink.DRINK.DESCRIPTION, values);
    }

    /**
     * Fetch records that have <code>srm BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfSrm(Integer lowerInclusive, Integer upperInclusive) {
        return fetchRange(Drink.DRINK.SRM, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>srm IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchBySrm(Integer... values) {
        return fetch(Drink.DRINK.SRM, values);
    }

    /**
     * Fetch records that have <code>ibu BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfIbu(Integer lowerInclusive, Integer upperInclusive) {
        return fetchRange(Drink.DRINK.IBU, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>ibu IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByIbu(Integer... values) {
        return fetch(Drink.DRINK.IBU, values);
    }

    /**
     * Fetch records that have <code>abv BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfAbv(BigDecimal lowerInclusive, BigDecimal upperInclusive) {
        return fetchRange(Drink.DRINK.ABV, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>abv IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByAbv(BigDecimal... values) {
        return fetch(Drink.DRINK.ABV, values);
    }

    /**
     * Fetch records that have <code>availability BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfAvailability(String lowerInclusive, String upperInclusive) {
        return fetchRange(Drink.DRINK.AVAILABILITY, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>availability IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByAvailability(String... values) {
        return fetch(Drink.DRINK.AVAILABILITY, values);
    }

    /**
     * Fetch records that have <code>brewery_db_id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfBreweryDbId(String lowerInclusive, String upperInclusive) {
        return fetchRange(Drink.DRINK.BREWERY_DB_ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>brewery_db_id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByBreweryDbId(String... values) {
        return fetch(Drink.DRINK.BREWERY_DB_ID, values);
    }

    /**
     * Fetch records that have <code>brewery_db_last_updated BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfBreweryDbLastUpdated(LocalDateTime lowerInclusive, LocalDateTime upperInclusive) {
        return fetchRange(Drink.DRINK.BREWERY_DB_LAST_UPDATED, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>brewery_db_last_updated IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByBreweryDbLastUpdated(LocalDateTime... values) {
        return fetch(Drink.DRINK.BREWERY_DB_LAST_UPDATED, values);
    }

    /**
     * Fetch records that have <code>locked BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfLocked(Boolean lowerInclusive, Boolean upperInclusive) {
        return fetchRange(Drink.DRINK.LOCKED, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>locked IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByLocked(Boolean... values) {
        return fetch(Drink.DRINK.LOCKED, values);
    }

    /**
     * Fetch records that have <code>needs_moderation BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfNeedsModeration(Boolean lowerInclusive, Boolean upperInclusive) {
        return fetchRange(Drink.DRINK.NEEDS_MODERATION, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>needs_moderation IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByNeedsModeration(Boolean... values) {
        return fetch(Drink.DRINK.NEEDS_MODERATION, values);
    }

    /**
     * Fetch records that have <code>created_date BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfCreatedDate(LocalDateTime lowerInclusive, LocalDateTime upperInclusive) {
        return fetchRange(Drink.DRINK.CREATED_DATE, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>created_date IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByCreatedDate(LocalDateTime... values) {
        return fetch(Drink.DRINK.CREATED_DATE, values);
    }

    /**
     * Fetch records that have <code>modified_date BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfModifiedDate(LocalDateTime lowerInclusive, LocalDateTime upperInclusive) {
        return fetchRange(Drink.DRINK.MODIFIED_DATE, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>modified_date IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByModifiedDate(LocalDateTime... values) {
        return fetch(Drink.DRINK.MODIFIED_DATE, values);
    }

    /**
     * Fetch records that have <code>data BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfData(JSON lowerInclusive, JSON upperInclusive) {
        return fetchRange(Drink.DRINK.DATA, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>data IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByData(JSON... values) {
        return fetch(Drink.DRINK.DATA, values);
    }

    /**
     * Fetch records that have <code>warning_flag BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfWarningFlag(Boolean lowerInclusive, Boolean upperInclusive) {
        return fetchRange(Drink.DRINK.WARNING_FLAG, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>warning_flag IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByWarningFlag(Boolean... values) {
        return fetch(Drink.DRINK.WARNING_FLAG, values);
    }

    /**
     * Fetch records that have <code>tradable_beers BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfTradableBeers(Short lowerInclusive, Short upperInclusive) {
        return fetchRange(Drink.DRINK.TRADABLE_BEERS, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>tradable_beers IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByTradableBeers(Short... values) {
        return fetch(Drink.DRINK.TRADABLE_BEERS, values);
    }

    /**
     * Fetch records that have <code>cellared_beers BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfCellaredBeers(Short lowerInclusive, Short upperInclusive) {
        return fetchRange(Drink.DRINK.CELLARED_BEERS, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>cellared_beers IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByCellaredBeers(Short... values) {
        return fetch(Drink.DRINK.CELLARED_BEERS, values);
    }

    /**
     * Fetch records that have <code>contained_in_cellars BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchRangeOfContainedInCellars(Short lowerInclusive, Short upperInclusive) {
        return fetchRange(Drink.DRINK.CONTAINED_IN_CELLARS, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>contained_in_cellars IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.Drink> fetchByContainedInCellars(Short... values) {
        return fetch(Drink.DRINK.CONTAINED_IN_CELLARS, values);
    }
}
