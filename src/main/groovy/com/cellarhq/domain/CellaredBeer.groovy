package com.cellarhq.domain

import com.cellarhq.ratpack.hibernate.Entity

import javax.persistence.Column
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne

@Entity(name = 'cellared_beer')
class CellaredBeer extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = 'cellar_id', nullable = false, updatable = false)
    Cellar cellar

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = 'beer_id', nullable = false, updatable = false)
    Beer beer

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = 'style_id', nullable = false, updatable = false)
    Style style

    @Column(name = 'bottle_date', nullable = true)
    Date bottleDate

    // TODO enum
    @Column(length = 10, nullable = true)
    String size

    @Column(nullable = false)
    int quantity = 0

    @Column(nullable = true)
    String notes

    @Column(name = 'drink_by_date', nullable = true)
    Date drinkByDate

    @SuppressWarnings('PropertyName')
    @Column(name = 'private', nullable = false)
    boolean _private = false

    boolean isPrivate() {
        return _private
    }
}
