import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Declicous Meal, created {""}
          <span>By you</span>
        </h1>
        <p>Choose your fav recipe, it is fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
