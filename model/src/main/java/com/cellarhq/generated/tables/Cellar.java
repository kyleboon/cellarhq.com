/**
 * This class is generated by jOOQ
 */
package com.cellarhq.generated.tables;

/**
 * This class is generated by jOOQ.
 */
@javax.annotation.Generated(value    = { "http://www.jooq.org", "3.4.1" },
                            comments = "This class is generated by jOOQ")
@java.lang.SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Cellar extends org.jooq.impl.TableImpl<com.cellarhq.generated.tables.records.CellarRecord> {

	private static final long serialVersionUID = 527869676;

	/**
	 * The singleton instance of <code>public.cellar</code>
	 */
	public static final com.cellarhq.generated.tables.Cellar CELLAR = new com.cellarhq.generated.tables.Cellar();

	/**
	 * The class holding records for this type
	 */
	@Override
	public java.lang.Class<com.cellarhq.generated.tables.records.CellarRecord> getRecordType() {
		return com.cellarhq.generated.tables.records.CellarRecord.class;
	}

	/**
	 * The column <code>public.cellar.id</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.version</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Integer> VERSION = createField("version", org.jooq.impl.SQLDataType.INTEGER.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.photo_id</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Long> PHOTO_ID = createField("photo_id", org.jooq.impl.SQLDataType.BIGINT, this, "");

	/**
	 * The column <code>public.cellar.screen_name</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> SCREEN_NAME = createField("screen_name", org.jooq.impl.SQLDataType.VARCHAR.length(64).nullable(false), this, "");

	/**
	 * The column <code>public.cellar.display_name</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> DISPLAY_NAME = createField("display_name", org.jooq.impl.SQLDataType.VARCHAR.length(64), this, "");

	/**
	 * The column <code>public.cellar.location</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> LOCATION = createField("location", org.jooq.impl.SQLDataType.VARCHAR.length(100), this, "");

	/**
	 * The column <code>public.cellar.website</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> WEBSITE = createField("website", org.jooq.impl.SQLDataType.VARCHAR.length(100), this, "");

	/**
	 * The column <code>public.cellar.bio</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> BIO = createField("bio", org.jooq.impl.SQLDataType.CLOB, this, "");

	/**
	 * The column <code>public.cellar.update_from_network</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Boolean> UPDATE_FROM_NETWORK = createField("update_from_network", org.jooq.impl.SQLDataType.BOOLEAN.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.contact_email</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> CONTACT_EMAIL = createField("contact_email", org.jooq.impl.SQLDataType.VARCHAR.length(255), this, "");

	/**
	 * The column <code>public.cellar.private</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Boolean> PRIVATE = createField("private", org.jooq.impl.SQLDataType.BOOLEAN.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.last_login</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.sql.Timestamp> LAST_LOGIN = createField("last_login", org.jooq.impl.SQLDataType.TIMESTAMP, this, "");

	/**
	 * The column <code>public.cellar.last_login_ip</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> LAST_LOGIN_IP = createField("last_login_ip", org.jooq.impl.SQLDataType.VARCHAR.length(30), this, "");

	/**
	 * The column <code>public.cellar.created_date</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.sql.Timestamp> CREATED_DATE = createField("created_date", org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.modified_date</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.sql.Timestamp> MODIFIED_DATE = createField("modified_date", org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.twitter</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> TWITTER = createField("twitter", org.jooq.impl.SQLDataType.VARCHAR.length(16), this, "");

	/**
	 * The column <code>public.cellar.reddit</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> REDDIT = createField("reddit", org.jooq.impl.SQLDataType.VARCHAR.length(20), this, "");

	/**
	 * The column <code>public.cellar.beeradvocate</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> BEERADVOCATE = createField("beeradvocate", org.jooq.impl.SQLDataType.VARCHAR.length(255), this, "");

	/**
	 * The column <code>public.cellar.ratebeer</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> RATEBEER = createField("ratebeer", org.jooq.impl.SQLDataType.VARCHAR.length(255), this, "");

	/**
	 * The column <code>public.cellar.total_beers</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Short> TOTAL_BEERS = createField("total_beers", org.jooq.impl.SQLDataType.SMALLINT.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.unique_beers</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Short> UNIQUE_BEERS = createField("unique_beers", org.jooq.impl.SQLDataType.SMALLINT.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.unique_breweries</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Short> UNIQUE_BREWERIES = createField("unique_breweries", org.jooq.impl.SQLDataType.SMALLINT.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.has_tradeable_beers</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Boolean> HAS_TRADEABLE_BEERS = createField("has_tradeable_beers", org.jooq.impl.SQLDataType.BOOLEAN.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.cellar.slug</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.String> SLUG = createField("slug", org.jooq.impl.SQLDataType.VARCHAR.length(64).nullable(false), this, "");

	/**
	 * Create a <code>public.cellar</code> table reference
	 */
	public Cellar() {
		this("cellar", null);
	}

	/**
	 * Create an aliased <code>public.cellar</code> table reference
	 */
	public Cellar(java.lang.String alias) {
		this(alias, com.cellarhq.generated.tables.Cellar.CELLAR);
	}

	private Cellar(java.lang.String alias, org.jooq.Table<com.cellarhq.generated.tables.records.CellarRecord> aliased) {
		this(alias, aliased, null);
	}

	private Cellar(java.lang.String alias, org.jooq.Table<com.cellarhq.generated.tables.records.CellarRecord> aliased, org.jooq.Field<?>[] parameters) {
		super(alias, com.cellarhq.generated.Public.PUBLIC, aliased, parameters, "");
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Identity<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Long> getIdentity() {
		return com.cellarhq.generated.Keys.IDENTITY_CELLAR;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.UniqueKey<com.cellarhq.generated.tables.records.CellarRecord> getPrimaryKey() {
		return com.cellarhq.generated.Keys.PK_CELLAR;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.util.List<org.jooq.UniqueKey<com.cellarhq.generated.tables.records.CellarRecord>> getKeys() {
		return java.util.Arrays.<org.jooq.UniqueKey<com.cellarhq.generated.tables.records.CellarRecord>>asList(com.cellarhq.generated.Keys.PK_CELLAR, com.cellarhq.generated.Keys.UNQ_CELLAR_SCREEN_NAME, com.cellarhq.generated.Keys.CELLAR_SLUG_UNIQUE_CONSTRAINT);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.util.List<org.jooq.ForeignKey<com.cellarhq.generated.tables.records.CellarRecord, ?>> getReferences() {
		return java.util.Arrays.<org.jooq.ForeignKey<com.cellarhq.generated.tables.records.CellarRecord, ?>>asList(com.cellarhq.generated.Keys.CELLAR__FK_CELLAR_PHOTO_ID);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.TableField<com.cellarhq.generated.tables.records.CellarRecord, java.lang.Integer> getRecordVersion() {
		return com.cellarhq.generated.tables.Cellar.CELLAR.VERSION;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public com.cellarhq.generated.tables.Cellar as(java.lang.String alias) {
		return new com.cellarhq.generated.tables.Cellar(alias, this);
	}

	/**
	 * Rename this table
	 */
	public com.cellarhq.generated.tables.Cellar rename(java.lang.String name) {
		return new com.cellarhq.generated.tables.Cellar(name, null);
	}
}
