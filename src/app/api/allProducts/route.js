
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

//GET For All Products
export async function GET(req) {
  try {
    const allPrd = await Product.find();
    return NextResponse.json({ data: allPrd });
  } catch (error) {
    return NextResponse.json({ msg: "Error Occured", error });
  }
}
