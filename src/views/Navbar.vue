<template>
<div>
  <div class="sidebar">
    <font-awesome-icon icon="bars" class="sidebar__icon" v-b-toggle.sidebar-1/>
    <div class="sidebar__end">
      <div class="sidebar__end-shop">
        <font-awesome-icon icon="shopping-bag" class="sidebar__icon icon-primary" v-on:click="show = !show; dim = !dim"/>
        <div class="sidebar__orders-badge" v-if="orders.length">
          <span class="sidebar__orders-badge-text">{{orders.length}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="cartpop" v-if="show" @blur="show=false">
    <div class="cartpop__content">
      <ul class="cartpop__orders" v-if="orders.length">
        <li v-for="index in 3" :key="index" class="cartpop__order-menu">
          <div class="cartpop__image-container">
             <img :src="require('../assets/food/'+orders[index-1].image+'.jpg')" class="cartpop__image"/>
          </div>
          <div class="cartpop__order-details">
            <span class="cartpop__menu-name">{{orders[index-1].name}}</span>
            <span class="cartpop__menu-quantity">x{{orders[index-1].quantity}}</span>
          </div>
        </li>
        <div class="cartpop__menu-more" v-if="orders.length - 3 > 1">
          <span class="cartpop__menu-more-label">{{orders.length - 3}} more items in your order</span>
        </div>
        <div class="cartpop__menu-more" v-else-if="orders.length - 3 > 0">
          <span class="cartpop__menu-more-label">{{orders.length - 3}} more item in your order</span>
        </div>
        <router-link class="cartpop__placeorder primary-button" to ="/order" @click.native="show = false; dim = false">
          Place order
        </router-link>
      </ul>
      <div class="cartpop__empty" v-else>
          Your order is empty
      </div>
      <router-link class="cartpop__menu route-menu" to="/order" @click.native="show = false; dim = false">
        <font-awesome-icon icon="shopping-bag" class="cartpop__icon" />
        <span>Order</span> 
        <span v-if="orders.length"> ({{orders.length}})</span>
      </router-link>
      <router-link class="cartpop__menu route-menu" to="/track" @click.native="show = false; dim = false">
        <font-awesome-icon icon="tasks" class="cartpop__icon" />
        <span>Track</span>
      </router-link>
      <router-link class="cartpop__menu route-menu" to="/account" @click.native="show = false; dim = false">
        <font-awesome-icon icon="user-circle" class="cartpop__icon" />
        <span>Sign in</span>
      </router-link>
    </div>
  </div>
  <b-sidebar 
    id="sidebar-1" 
    shadow
    backdrop
    no-header
    v-slot:default="{ hide }"
  >
    <div class="sidebar__routes">
      <div class="sidebar__titlebar">
        <font-awesome-icon icon="bars" class="sidebar__icon icon-primary--dark" @click="hide"/>
        <h2 class="sidebar__title">Supreme</h2>
      </div>
      <router-link class="sidebar__router" to="/" @click.native="show = false; dim = false">
        <font-awesome-icon icon="home" class="sidebar__icon icon-secondary" />
        Home
      </router-link>
      <span class="sidebar__collapse" v-b-toggle.collapse-menu v-on:click="toggleArrow()"> 
        <font-awesome-icon icon="utensils" class="sidebar__collapse__icon icon-secondary" />
        <label class= "sidebar__router menu">Menu</label>
        <font-awesome-icon id="arrow" icon="angle-down" class="sidebar__iconright" />
      </span>
      <b-collapse id="collapse-menu">
        <router-link class="sidebar__router submenu" to="/food" @click.native="show = false; dim = false">Food</router-link>
        <router-link class="sidebar__router submenu" to="/beverage" @click.native="show = false; dim = false">Beverage</router-link>
      </b-collapse>
      <router-link class="sidebar__router" to="/about" @click.native="show = false; dim = false">
        <font-awesome-icon icon="info-circle" class="sidebar__icon icon-secondary" />
        About
      </router-link>
    </div>
  </b-sidebar>
  <transition name="fade">
    <div class="screen--dim" v-if="dim" v-on:click="show =false; dim=false"/>
  </transition>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data: function(){
    return{
      show: false,
      dim: false,
      orders: [
        {id: 1, name:'Aglio e Olio', quantity:'1', price: '79k', image:'food1'},
        {id: 2, name:'Ravioli', quantity:'1', price: '79k',image:'food2'},
        {id: 3, name:'Sparkling Water',  quantity:'1', price: '44k',image:'food3'},
        {id: 4, name:'Mineral Water',  quantity:'1', price: '12k',image:'food3'},
      ],
    }
  },
  methods:{
    toggleArrow: function(){
      document.getElementById("arrow").classList.toggle("flip");
    }
  }
}
</script>

<style lang="scss" scoped>

.sidebar{
  display: flex;
  padding: .8em 2em;
  background: $primary-bg;
  color: $primary-color;
  height: 64px;
  align-items: center;
  position: relative;
  z-index: 98;

  &__routes{
    display: flex;
    flex-direction: column;
  }

  &__icon{
    background: transparent;
    border-style: none;
    font-size: 18px;
    cursor: pointer;
    margin-right: 1.5rem;
  }

  &__iconright{
    justify-content: flex-end;
    margin-left: auto;
  }

  &__collapse__icon{
    margin-left: 2.05rem;
  }

  &__icon:focus,
  &__iconright:focus,
  &__collapse:focus{
    outline:none;
    box-shadow: none;
  }

  &__titlebar{
    display: flex;
    padding: .8rem 2rem;
    height: 64px;

    border-bottom: 1px solid rgba(0,0,0,0.1);
    .sidebar__icon{
      height: auto;
    }
  }

  &__title{
    font-size: 18px;
    padding: 0;
    margin: 0;
    padding-left: .5rem;
    margin-block-start: 0.45em;
    margin-block-end: 0.45em;
    color: $sidebar-color-title;
  }

  &__router{
    padding: .8rem 1.9rem;
    font-size: 18px;
    color: $sidebar-color;

  }

  &__router:hover,
  &__collapse:hover{
    text-decoration: none;
    color: $sidebar-color-hover;
    background: $sidebar-bg-hover;
  }

  &__end{
    justify-content: flex-end;
    margin-left: auto;

    .sidebar__icon{
      margin: 0;
    }
  }

  &__end-shop{
    position: relative;
  }

  &__collapse{
    display: flex;
    align-items: center;
    padding-right: 2rem;
  }

  &__orders-badge{
    position: absolute;
    background: $notif;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 11px;
    bottom:-4px;
    left: 7px;
    pointer-events: none;
  }

  &__orders-badge-text{
    position: absolute;
    bottom: -0.5px;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }
}

.menu{
  margin: 0;
  padding-left: 0.5rem;
}

.menu:hover{
  background: transparent;
  cursor: pointer;
}

.submenu{
  display:flex;
  padding-left: 4.8rem;
}

.icon-secondary{
  margin-right: 1.4rem;
}

.screen--dim{
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}

.flip{
  transform: scaleY(-1);
}

.cartpop{
  display: flex;
  position: fixed;
  flex-direction: column;
  background: #fff;
  padding: .8em 1.2em;
  width: 100vw;
  z-index: 98;
  padding: 0em 2em 0.6em 2em;

  &::before{
    content: '';
    display: block;
    position: absolute;
    right: 2.85em;
    top: 0;
    width: 0; 
    height: 0; 
    margin-top: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }

  &__content{
    display: flex;
    flex-direction: column;
  }
  
  &__icon{
    margin-right: 1rem;
  }

  &__menu{
    padding: .8em 0.1em;
  }

  &__orders{
    display: flex;
    flex-direction: column;
    padding: .8em 0;
    margin: 0;
  }

  &__order-menu{
    display: flex;
    align-items: center;
    list-style-type: none;
    margin-bottom: .8em;
  }

  &__order-details{
    display:flex;
    flex-direction: column;
    margin-left: 1.2em;
  }

  &__empty{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }

  &__image{
    display:block;
    min-width: 80px;
    max-width: 80px;
    max-height: 80px;
    min-height: 80px;
  }

  &__image-container{
    width:80px;
    height: 80px;
  }

  &__menu-name{
    font-size: 18px;
    font-weight: 600;
    color: $text;
  }

  &__menu-quantity{
    font-size: 14px;
    color: $secondary-text;
  }

  &__menu-more{
    display: flex;
    justify-content: center;
    position: relative;
  }

  &__menu-more-label{
    position: relative;
    background: #fff;
    z-index: 10;
    padding: 0 .8em;
  }

  &__menu-more::before{
    content:'';
    display: block;
    border-top: 1px solid rgba(0,0,0,0.3);
    width: 100%;
    position: absolute;
    height: 1px;
    top: 50%;
    z-index: 3;
  }

  &__placeorder{
    display:flex;
    justify-content: center;
    padding: .5em 1.2em;
    margin-top: 1.2em;
    border-radius: 5px;
  }

  &__placeorder:hover{
    text-decoration: none;
    background: $btn-primary-hover;
  }
}

.fade-enter-active,
.fade-leave-active{
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

@media screen and (min-width:780px){
  .cartpop{
    display: flex;
    position: absolute;
    right: 0;
    width: 380px;
    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.08);
    border-radius: 8px;
    margin-top: 5px;
    margin-right: 5px;

    &::before{
      right: 1.5em;
    }
  }
}
</style>