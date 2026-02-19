// src/app/apiServices/productApiService.ts
import axios from "axios";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { serverApi } from "../../lib/config";
import { Product } from "../types/product";
import { ProductSearchObj } from "../types/others";

export type Review = {
  _id: string;
  product_id: string;
  mb_id: string;
  review_rating: number;
  review_text?: string;
  review_status?: "active" | "deleted";
  createdAt: string;
  updatedAt: string;
};

export type CreateReviewBody = {
  review_rating: number;
  review_text?: string;
};

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj): Promise<Product[]> {
    const url = "/products";
    const result = await axios.post(this.path + url, data, { withCredentials: true });

    assert.ok(result?.data, Definer.general_err1);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    return result.data.data as Product[];
  }

  async getChosenProduct(product_id: string): Promise<Product> {
    const url = `/products/${product_id}`;
    const result = await axios.get(this.path + url, { withCredentials: true });

    assert.ok(result?.data, Definer.general_err1);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    return result.data.data as Product;
  }

  async getProductReviews(product_id: string): Promise<Review[]> {
    const url = `/products/${product_id}/reviews`;
    const result = await axios.get(this.path + url, { withCredentials: true });

    assert.ok(result?.data, Definer.general_err1);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    return (result.data.data || []) as Review[];
  }

  async createProductReview(product_id: string, body: CreateReviewBody): Promise<Review> {
    const url = `/products/${product_id}/review`;
    const result = await axios.post(this.path + url, body, { withCredentials: true });

    assert.ok(result?.data, Definer.general_err1);
    assert.ok(result?.data?.state !== "fail", result?.data?.message);

    return result.data.data as Review;
  }
}

export default ProductApiService;
