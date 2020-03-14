package com.webshop.entitiy;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="product_category")
@Getter
@Setter
public class ProductCategory {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="id")
private Long id;


@Column(name = "category_name")
private String categoryNmae;

@OneToMany(cascade = CascadeType.ALL)
private Set<Product> products;



}
