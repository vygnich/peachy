import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";

register("header", Header);
load("*");
