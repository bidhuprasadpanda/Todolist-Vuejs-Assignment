<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <img class="WL_ExpandDiv_right center-block" :src="icons.logoIcon"/>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li class="active"><a href="#">Tasks</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> My Account</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import tsIcons from "../commonComponents/commonAssetIcons.js"
export default {
    data () {
        return {
            icons: tsIcons
        }
    }
}
</script>
