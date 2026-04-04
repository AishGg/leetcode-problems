var maxProfit = function(prices) {
    let min = prices[0]
    let maxprofit = 0
    for(let i =1;i<prices.length;i++){
        let cost = prices[i] - min
        maxprofit = Math.max(maxprofit, cost)
        min = Math.min(min, prices[i])

    }
    return maxprofit
};