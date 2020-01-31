/*
 * This file is generated by jOOQ.
 */
package com.cellarhq.generated.tables;


import com.cellarhq.generated.Indexes;
import com.cellarhq.generated.Keys;
import com.cellarhq.generated.Public;
import com.cellarhq.generated.tables.records.StyleRecord;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Index;
import org.jooq.JSON;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row11;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.TableImpl;


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
public class Style extends TableImpl<StyleRecord> {

    private static final long serialVersionUID = 1637343824;

    /**
     * The reference instance of <code>public.style</code>
     */
    public static final Style STYLE = new Style();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<StyleRecord> getRecordType() {
        return StyleRecord.class;
    }

    /**
     * The column <code>public.style.id</code>.
     */
    public final TableField<StyleRecord, Long> ID = createField(DSL.name("id"), org.jooq.impl.SQLDataType.BIGINT.nullable(false).defaultValue(org.jooq.impl.DSL.field("nextval('style_id_seq'::regclass)", org.jooq.impl.SQLDataType.BIGINT)), this, "");

    /**
     * The column <code>public.style.version</code>.
     */
    public final TableField<StyleRecord, Integer> VERSION = createField(DSL.name("version"), org.jooq.impl.SQLDataType.INTEGER.nullable(false).defaultValue(org.jooq.impl.DSL.field("1", org.jooq.impl.SQLDataType.INTEGER)), this, "");

    /**
     * The column <code>public.style.category_id</code>.
     */
    public final TableField<StyleRecord, Long> CATEGORY_ID = createField(DSL.name("category_id"), org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

    /**
     * The column <code>public.style.name</code>.
     */
    public final TableField<StyleRecord, String> NAME = createField(DSL.name("name"), org.jooq.impl.SQLDataType.VARCHAR(100).nullable(false), this, "");

    /**
     * The column <code>public.style.description</code>.
     */
    public final TableField<StyleRecord, String> DESCRIPTION = createField(DSL.name("description"), org.jooq.impl.SQLDataType.CLOB, this, "");

    /**
     * The column <code>public.style.searchable</code>.
     */
    public final TableField<StyleRecord, Boolean> SEARCHABLE = createField(DSL.name("searchable"), org.jooq.impl.SQLDataType.BOOLEAN.nullable(false).defaultValue(org.jooq.impl.DSL.field("true", org.jooq.impl.SQLDataType.BOOLEAN)), this, "");

    /**
     * The column <code>public.style.brewery_db_id</code>.
     */
    public final TableField<StyleRecord, String> BREWERY_DB_ID = createField(DSL.name("brewery_db_id"), org.jooq.impl.SQLDataType.VARCHAR(64), this, "");

    /**
     * The column <code>public.style.brewery_db_last_updated</code>.
     */
    public final TableField<StyleRecord, Timestamp> BREWERY_DB_LAST_UPDATED = createField(DSL.name("brewery_db_last_updated"), org.jooq.impl.SQLDataType.TIMESTAMP, this, "");

    /**
     * The column <code>public.style.created_date</code>.
     */
    public final TableField<StyleRecord, Timestamp> CREATED_DATE = createField(DSL.name("created_date"), org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaultValue(org.jooq.impl.DSL.field("now()", org.jooq.impl.SQLDataType.TIMESTAMP)), this, "");

    /**
     * The column <code>public.style.modified_date</code>.
     */
    public final TableField<StyleRecord, Timestamp> MODIFIED_DATE = createField(DSL.name("modified_date"), org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaultValue(org.jooq.impl.DSL.field("now()", org.jooq.impl.SQLDataType.TIMESTAMP)), this, "");

    /**
     * The column <code>public.style.data</code>.
     */
    public final TableField<StyleRecord, JSON> DATA = createField(DSL.name("data"), org.jooq.impl.SQLDataType.JSON, this, "");

    /**
     * Create a <code>public.style</code> table reference
     */
    public Style() {
        this(DSL.name("style"), null);
    }

    /**
     * Create an aliased <code>public.style</code> table reference
     */
    public Style(String alias) {
        this(DSL.name(alias), STYLE);
    }

    /**
     * Create an aliased <code>public.style</code> table reference
     */
    public Style(Name alias) {
        this(alias, STYLE);
    }

    private Style(Name alias, Table<StyleRecord> aliased) {
        this(alias, aliased, null);
    }

    private Style(Name alias, Table<StyleRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""));
    }

    public <O extends Record> Style(Table<O> child, ForeignKey<O, StyleRecord> key) {
        super(child, key, STYLE);
    }

    @Override
    public Schema getSchema() {
        return Public.PUBLIC;
    }

    @Override
    public List<Index> getIndexes() {
        return Arrays.<Index>asList(Indexes.IDX_STYLE_BREWERY_DB_ID, Indexes.PK_STYLE);
    }

    @Override
    public Identity<StyleRecord, Long> getIdentity() {
        return Keys.IDENTITY_STYLE;
    }

    @Override
    public UniqueKey<StyleRecord> getPrimaryKey() {
        return Keys.PK_STYLE;
    }

    @Override
    public List<UniqueKey<StyleRecord>> getKeys() {
        return Arrays.<UniqueKey<StyleRecord>>asList(Keys.PK_STYLE);
    }

    @Override
    public List<ForeignKey<StyleRecord, ?>> getReferences() {
        return Arrays.<ForeignKey<StyleRecord, ?>>asList(Keys.STYLE__FK_STYLE_CATEGORY_ID);
    }

    public Category category() {
        return new Category(this, Keys.STYLE__FK_STYLE_CATEGORY_ID);
    }

    @Override
    public Style as(String alias) {
        return new Style(DSL.name(alias), this);
    }

    @Override
    public Style as(Name alias) {
        return new Style(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public Style rename(String name) {
        return new Style(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public Style rename(Name name) {
        return new Style(name, null);
    }

    // -------------------------------------------------------------------------
    // Row11 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row11<Long, Integer, Long, String, String, Boolean, String, Timestamp, Timestamp, Timestamp, JSON> fieldsRow() {
        return (Row11) super.fieldsRow();
    }
}
