export const PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    tagline: 'Per chi inizia',
    description: 'Fino a 100 prodotti',
    setup: 499,
    revenueShare: 0.04,
    revenueShareDisplay: '4%',
    minMonthly: 79,
    maxMonthly: 199,
    breakeven: 4975,
    accent: 'default',
    featured: false,
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    tagline: 'Per chi vuole scalare',
    description: 'Prodotti illimitati',
    setup: 999,
    revenueShare: 0.03,
    revenueShareDisplay: '3%',
    minMonthly: 99,
    maxMonthly: 399,
    breakeven: 13300,
    accent: 'gold',
    featured: true,
    badge: 'Consigliato',
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    tagline: 'Per operazioni serie',
    description: 'Full automation',
    setup: 1999,
    revenueShare: 0.025,
    revenueShareDisplay: '2.5%',
    minMonthly: 149,
    maxMonthly: 599,
    breakeven: 23960,
    accent: 'gold-light',
    featured: false,
  },
};

export function calculateMonthlyFee(revenue, plan) {
  const calculated = revenue * plan.revenueShare;

  if (calculated < plan.minMonthly) {
    return { amount: plan.minMonthly, status: 'min' };
  }
  if (calculated > plan.maxMonthly) {
    return { amount: plan.maxMonthly, status: 'max' };
  }
  return { amount: Math.round(calculated), status: 'normal' };
}

export function calculateAllPlans(revenue) {
  return {
    starter: calculateMonthlyFee(revenue, PLANS.starter),
    growth: calculateMonthlyFee(revenue, PLANS.growth),
    pro: calculateMonthlyFee(revenue, PLANS.pro),
  };
}

export function getBestValue(revenue) {
  const fees = calculateAllPlans(revenue);
  let bestPlan = 'starter';
  let bestRatio = Infinity;

  Object.entries(fees).forEach(([planId, { amount }]) => {
    const ratio = amount / (revenue || 1);
    if (ratio < bestRatio && revenue > 0) {
      bestRatio = ratio;
      bestPlan = planId;
    }
  });

  return bestPlan;
}
