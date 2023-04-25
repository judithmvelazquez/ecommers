import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    update(arg0: number, updateProductDto: UpdateProductDto): void;
    constructor(productsRepository: Repository<Products>);
    create(createProductDto: CreateProductDto): Promise<Products>;
    findAll(): Promise<Products[]>;
    findOne(id: string): Promise<Products>;
    updateProducts(id: string, products: Products): Promise<void>;
    remove(id: string): string;
}
