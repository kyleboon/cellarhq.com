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
public class Photo extends org.jooq.impl.TableImpl<com.cellarhq.generated.tables.records.PhotoRecord> {

	private static final long serialVersionUID = -76309100;

	/**
	 * The singleton instance of <code>public.photo</code>
	 */
	public static final com.cellarhq.generated.tables.Photo PHOTO = new com.cellarhq.generated.tables.Photo();

	/**
	 * The class holding records for this type
	 */
	@Override
	public java.lang.Class<com.cellarhq.generated.tables.records.PhotoRecord> getRecordType() {
		return com.cellarhq.generated.tables.records.PhotoRecord.class;
	}

	/**
	 * The column <code>public.photo.id</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.photo.version</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Integer> VERSION = createField("version", org.jooq.impl.SQLDataType.INTEGER.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.photo.description</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.String> DESCRIPTION = createField("description", org.jooq.impl.SQLDataType.CLOB.nullable(false), this, "");

	/**
	 * The column <code>public.photo.original_url</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.String> ORIGINAL_URL = createField("original_url", org.jooq.impl.SQLDataType.VARCHAR.length(500).nullable(false), this, "");

	/**
	 * The column <code>public.photo.thumb_url</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.String> THUMB_URL = createField("thumb_url", org.jooq.impl.SQLDataType.VARCHAR.length(500), this, "");

	/**
	 * The column <code>public.photo.thumb_width</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Short> THUMB_WIDTH = createField("thumb_width", org.jooq.impl.SQLDataType.SMALLINT, this, "");

	/**
	 * The column <code>public.photo.thumb_height</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Short> THUMB_HEIGHT = createField("thumb_height", org.jooq.impl.SQLDataType.SMALLINT, this, "");

	/**
	 * The column <code>public.photo.large_url</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.String> LARGE_URL = createField("large_url", org.jooq.impl.SQLDataType.VARCHAR.length(500), this, "");

	/**
	 * The column <code>public.photo.large_width</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Short> LARGE_WIDTH = createField("large_width", org.jooq.impl.SQLDataType.SMALLINT, this, "");

	/**
	 * The column <code>public.photo.large_height</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Short> LARGE_HEIGHT = createField("large_height", org.jooq.impl.SQLDataType.SMALLINT, this, "");

	/**
	 * The column <code>public.photo.created_date</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.sql.Timestamp> CREATED_DATE = createField("created_date", org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>public.photo.modified_date</code>.
	 */
	public final org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.sql.Timestamp> MODIFIED_DATE = createField("modified_date", org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaulted(true), this, "");

	/**
	 * Create a <code>public.photo</code> table reference
	 */
	public Photo() {
		this("photo", null);
	}

	/**
	 * Create an aliased <code>public.photo</code> table reference
	 */
	public Photo(java.lang.String alias) {
		this(alias, com.cellarhq.generated.tables.Photo.PHOTO);
	}

	private Photo(java.lang.String alias, org.jooq.Table<com.cellarhq.generated.tables.records.PhotoRecord> aliased) {
		this(alias, aliased, null);
	}

	private Photo(java.lang.String alias, org.jooq.Table<com.cellarhq.generated.tables.records.PhotoRecord> aliased, org.jooq.Field<?>[] parameters) {
		super(alias, com.cellarhq.generated.Public.PUBLIC, aliased, parameters, "");
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Identity<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Long> getIdentity() {
		return com.cellarhq.generated.Keys.IDENTITY_PHOTO;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.UniqueKey<com.cellarhq.generated.tables.records.PhotoRecord> getPrimaryKey() {
		return com.cellarhq.generated.Keys.PK_PHOTO;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.util.List<org.jooq.UniqueKey<com.cellarhq.generated.tables.records.PhotoRecord>> getKeys() {
		return java.util.Arrays.<org.jooq.UniqueKey<com.cellarhq.generated.tables.records.PhotoRecord>>asList(com.cellarhq.generated.Keys.PK_PHOTO, com.cellarhq.generated.Keys.UNQ_PHOTO_ORIGINAL_URL);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.TableField<com.cellarhq.generated.tables.records.PhotoRecord, java.lang.Integer> getRecordVersion() {
		return com.cellarhq.generated.tables.Photo.PHOTO.VERSION;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public com.cellarhq.generated.tables.Photo as(java.lang.String alias) {
		return new com.cellarhq.generated.tables.Photo(alias, this);
	}

	/**
	 * Rename this table
	 */
	public com.cellarhq.generated.tables.Photo rename(java.lang.String name) {
		return new com.cellarhq.generated.tables.Photo(name, null);
	}
}