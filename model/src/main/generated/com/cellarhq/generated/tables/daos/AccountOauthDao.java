/*
 * This file is generated by jOOQ.
 */
package com.cellarhq.generated.tables.daos;


import com.cellarhq.generated.tables.AccountOauth;
import com.cellarhq.generated.tables.records.AccountOauthRecord;

import java.sql.Timestamp;
import java.util.List;

import javax.annotation.Generated;

import org.jooq.Configuration;
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
public class AccountOauthDao extends DAOImpl<AccountOauthRecord, com.cellarhq.generated.tables.pojos.AccountOauth, Long> {

    /**
     * Create a new AccountOauthDao without any configuration
     */
    public AccountOauthDao() {
        super(AccountOauth.ACCOUNT_OAUTH, com.cellarhq.generated.tables.pojos.AccountOauth.class);
    }

    /**
     * Create a new AccountOauthDao with an attached configuration
     */
    public AccountOauthDao(Configuration configuration) {
        super(AccountOauth.ACCOUNT_OAUTH, com.cellarhq.generated.tables.pojos.AccountOauth.class, configuration);
    }

    @Override
    public Long getId(com.cellarhq.generated.tables.pojos.AccountOauth object) {
        return object.getId();
    }

    /**
     * Fetch records that have <code>id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchById(Long... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.ID, values);
    }

    /**
     * Fetch a unique record that has <code>id = value</code>
     */
    public com.cellarhq.generated.tables.pojos.AccountOauth fetchOneById(Long value) {
        return fetchOne(AccountOauth.ACCOUNT_OAUTH.ID, value);
    }

    /**
     * Fetch records that have <code>version BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfVersion(Integer lowerInclusive, Integer upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.VERSION, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>version IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchByVersion(Integer... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.VERSION, values);
    }

    /**
     * Fetch records that have <code>cellar_id BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfCellarId(Long lowerInclusive, Long upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.CELLAR_ID, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>cellar_id IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchByCellarId(Long... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.CELLAR_ID, values);
    }

    /**
     * Fetch records that have <code>client BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfClient(String lowerInclusive, String upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.CLIENT, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>client IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchByClient(String... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.CLIENT, values);
    }

    /**
     * Fetch records that have <code>username BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfUsername(String lowerInclusive, String upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.USERNAME, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>username IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchByUsername(String... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.USERNAME, values);
    }

    /**
     * Fetch records that have <code>created_date BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfCreatedDate(Timestamp lowerInclusive, Timestamp upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.CREATED_DATE, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>created_date IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchByCreatedDate(Timestamp... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.CREATED_DATE, values);
    }

    /**
     * Fetch records that have <code>modified_date BETWEEN lowerInclusive AND upperInclusive</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchRangeOfModifiedDate(Timestamp lowerInclusive, Timestamp upperInclusive) {
        return fetchRange(AccountOauth.ACCOUNT_OAUTH.MODIFIED_DATE, lowerInclusive, upperInclusive);
    }

    /**
     * Fetch records that have <code>modified_date IN (values)</code>
     */
    public List<com.cellarhq.generated.tables.pojos.AccountOauth> fetchByModifiedDate(Timestamp... values) {
        return fetch(AccountOauth.ACCOUNT_OAUTH.MODIFIED_DATE, values);
    }
}