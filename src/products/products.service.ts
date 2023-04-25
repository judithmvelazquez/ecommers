import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {
  update(arg0: number, updateProductDto: UpdateProductDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>

  ){}

  async create(createProductDto: CreateProductDto) {
    const products = this.productsRepository.create(createProductDto);
    await this.productsRepository.save(products);
    return products;
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: string) {
    return this.productsRepository.findOne({
      where: { id }
    });
  }

  async updateProducts(id: string, products: Products) {
    await this.productsRepository.update(id, products);
  }

  remove(id: string) {
    this.productsRepository.delete(id);
    return "Eliminado"
  }
}
