/// <reference path="../typings/angularjs/angular.d.ts" />
import * as angular from "angular";
import Grid from "./components/grid/grid.tsx";
import GridService from "./services/Grid.service.ts";
import LogService from "./services/LogService.ts";
import "./index.scss";

var app = angular.module("grid-app", []);
app.component(Grid.selector, Grid);
app.service(LogService.selector, LogService.controller);
app.service(GridService.selector, GridService.controller);
