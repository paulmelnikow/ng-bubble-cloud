def prepend_path(component, path_variable='PATH')
    path_components = ENV[path_variable].split ':'
    unless path_components.include? component
        path_components.unshift component
        ENV[path_variable] = path_components.join ':'
    end
end

prepend_path File.expand_path 'node_modules/.bin'

task :require do
	unless system("which node >> /dev/null")
		puts "Please install node.js, or run nvm use"
	end
end

task :install => :require do
	raise unless system("npm install")
	raise unless system("bower prune && bower install")
end

task :default => :start

task :start => :require do
	raise unless exec("http-server")
end

