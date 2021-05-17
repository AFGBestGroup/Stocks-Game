<template>
  <div>
    <h1>Journey Tutorial: An Introduction to the Stock Market</h1>
    <br />
    <h2>Personal Finance</h2>
    <br />

    <div>
      <h3>Introduction</h3>
      <img class="floatright" style="width: 14%; height: 14%;" alt="Journey Logo" src="./assets/profile.png" />
      <p>
        Finance is a very broad topic and there are many different parts to
        fully understanding it. Understanding your own
        <b>personal finance</b> is an essential part of ensuring you are able to
        live a comfortable life. In today’s society, the majority of people and
        their lifestyles are dependent on their incomes making it incredibly
        essential.
      </p>
    </div>

    <div>
      <h3>Income</h3>
      <img class="floatright" alt="HALP" src="./assets/Topple.gif" />
      <p>
        Your life is built on top of your income, and relying on only 1 type of
        income solely will make your lifestyle very unstable. If you only rely
        on one income source, like your active income job, and that is lost for
        whatever reason, everything else will topple.
        <br>
        If you and your lifestyle are built on multiple sources of income, then
        your lifestyle is more stable, as you have other forms of income to fall
        back on if one or more fails.
        <br>
        As you can see, there are many benefits to having multiple forms of
        income. However, you may be wondering, how am I supposed to find time to
        work more than 1 or 2 jobs and still enjoy my lifestyle that I’m working
        so hard to support? The answer is simple, you don’t.
      </p>
    </div>
    <div>
      <h3>Active Vs. Passive Income</h3>
      <img class="floatleft" alt="Active vs. Passive Income Clipart" src="./assets/ActivePassiveIncome.jpg" />
      <p>
        There are two main types of income, passive and active.
        <b>Active income</b> refers to income received for performing a service.
        <b>Passive income</b> requires no effort to earn and maintain and
        includes regular earnings from a source other than an employer or
        contractor.
        <br />
        Active income can include, hourly wages, salaries, commission, and tips.
        <br />
        Examples of passive income include, but are not limited to, rental
        income, buying and selling stocks, dividend stocks, and royalties.
        <br />
        Having multiple forms of passive income in addition to, or even instead
        of active income, can help increase your income. Owning assets is a good
        way to earn passive income.
      </p>
    </div>
    <div>
      <h3>Assets vs. Liabilities</h3>
      <img class="floatright smallImg" alt="Assets vs. Liabilities Clipart" src="./assets/AssetsLiabilities.jpg" />
      <p>
        <b>Assets</b> are things that people own that earn them money, and
        <b>liabilities</b> cost them more money than earn. Basically, assets
        give you money and liabilities take money from you.
      </p>
    </div>
    <div>
      <h3>Types of Assets</h3>
      <p>
        There are many different types of assets, some easier to get into than
        others. Typically, assets require you to have money that you can put
        into it. Spend money to earn money.
      </p>
    </div>
    <div>
      <img class="floatleft smallImg" alt="Diversify your Portfolio Clipart" src="./assets/WhyShouldYouInvest.jpg" />
      <h3>Why Should You Invest?</h3>
      <p>
        Investing your money allows you to make money with money you already
        have. This is similar to what you already do if you have a savings
        account where you earn a monthly interest rate.
        <br />
        Putting your trust and money into assets may seem scary at first, and it
        is because there is always a risk when you are doing it. However, this
        is why you should try and rely on multiple forms of income. Make sure
        that you aren’t only reliant on one form of income in case an investment
        opportunity falls through.
        <br />
        Investing in assets can allow you to start earning passive income, and
        ensure the stability of your overall income.
        <br />
        In the long run, stocks outperform any other major type of asset.
      </p>
    </div>

    <div>
      <h3>The Stock Market</h3>
      <p>
        The stock market functions very similarly to an auction house. People
        that own stocks try to sell them as high as possible, and people who are
        buying stocks try to buy them as low as possible.
      </p>
    </div>

    <div>
      <h3>Types of Stocks</h3>
      <p>
        There are many different types of stocks, including but not limited to,
        common stocks, penny stocks, and dividend stocks.
        <br />
        Penny stocks are stocks that are very cheap (under $5) to buy.
        <br />
        Dividend stocks give a payout to everyone who owns the stock either
        quarterly or yearly.
      </p>
    </div>

    <h2>Journey Stocks Simulation</h2>

    <div>
      <h3>Introduction</h3>
      <p>
        Journey is an interactive stock simulator where you will be able to
        practice building and growing a stock portfolio. The data used in this
        game is based on real historical data from four different major
        companies over the last year.
      </p>
    </div>

    <div>
      <h3>Day Counter</h3>
      <p>
        This is your day count. Here you can see what day of the simulation it
        is. You can also keep track of how far away you are from both payday and
        dividend stock payout dates. The simulation will run for 365 virtual
        days.
      </p>

      <strong>Current Day: {{ state.currentDay }}</strong>
    </div>

<div>
      <h3>Buy and Sell Buttons</h3>
      <p>
        With these two buttons you can buy and sell your stocks. You can choose
        the number of stocks to buy or sell.
      </p>
      <Stock name="pear" />
</div>

    <div>
      <h3>Balances</h3>
      <p>
        Under balances, you can see how much money you have and your current net
        worth.
      </p>
    </div>

    <div>
      <h3>Cash Available for Trading</h3>
      <p>
        This is your cash available for trading. This is the amount of money you
        have physically available to buy stocks with. This is also the money
        that you can use for emergency situations without cashing out stocks.
        <br />
        You will see this number go up when you sell stocks, and you will see it
        go down as you buy stocks or spend outside of the stock market.
        <br />
        As money enters or leaves your account, you will see that displayed next
        to this number.
      </p>
      <strong>${{ displayNumber(state.bank.balance) }}</strong>
    </div>

    <div>
      <h3>Portfolio Value</h3>
      <p>
        Your portfolio value is the total value of all your assets in this
        account. This includes all your cash as well as everything you have in
        stocks. You will see the value of this account go up and down based on
        the current value of the stocks you own. It will also go up and down as
        money is added and removed from your money available for trading
        account.
      </p>
      <strong>${{ displayNumber(calcPortValue()) }}</strong>
    </div>

    <div>
      <h3>Stocks</h3>
      <p>
        These are the stocks that you can buy and see. You can watch their
        trends in the graph and buy and sell when you want. You can see the
        stock’s current price, their day change, as well as the number of shares
        of the individual stock that you own.
      </p>
    </div>

    <button>
      <a href="/">Back to Home Page</a>
    </button>
    <button>
      <a href="/game">Play Full Game</a>
    </button>
  </div>
</template>

<script setup>
import Stock from "./components/Stock.vue";
</script>

<script>
import state from "./state.js";
import { displayNumber, calcPortValue } from "./util";
export default {
  data() {
    return {
      state,
    };
  },
  methods: {
    displayNumber,
    calcPortValue,
  },
};
</script>
