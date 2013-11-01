# More info at https://github.com/guard/guard#readme

notification :off

guard "jekyll-plus", :serve => true, :baseurl => '/' do
  watch /.*/
  ignore /^_site/
end

guard "coffeescript", :input => '_coffee', :output => 'js',  :all_on_start => true
guard 'sass',         :input => '_scss',   :output => 'css', :all_on_start => true

