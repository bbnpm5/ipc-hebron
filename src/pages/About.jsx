import { Users, Heart, BookOpen, Cross } from 'lucide-react'

const About = () => {
  return (
    <div>
      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <Cross className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
              "Our mission is to glorify God by proclaiming the Gospel of Jesus Christ, 
              being led by the Holy Spirit, making disciples, and demonstrating God's love 
              through worship, word, and works."
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              India Pentecostal Church Hebron (IPC Hebron) is a vibrant Pentecostal 
              congregation located in Neria, Belthangady Taluk, Dakshina Kannada, Karnataka, India. 
              We are a community of believers committed to following Jesus Christ and 
              spreading His message of love, hope, and salvation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a Pentecostal church, we believe in the power and presence of the Holy 
              Spirit in our lives and worship. We emphasize the importance of prayer, 
              worship, and the study of God's Word as foundational to our faith journey.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership - Current Pastor */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Pastor Suresh" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Pastor Suresh</h3>
            <p className="text-gray-700 text-lg mb-2">Senior Pastor (2018 - Present)</p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Pastor Suresh leads our congregation with dedication and passion, 
              guiding us in our walk with Christ and serving our community with 
              love and compassion. Under his leadership, the church continues to 
              grow in faith and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Past Pastors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IPC Hebron was blessed and started in 1990. We honor the faithful 
              pastors who have served our congregation throughout the years.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Pr K P Babu - Founder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr K P Babu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr K P Babu</h3>
                <p className="text-primary-600 font-semibold mb-3">1990 - 1997 (7 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr K P Babu was the founding pastor who established IPC Hebron in 1990. 
                  His vision and dedication laid the foundation for our church, and his 
                  faithful service for 7 years set the course for our ministry.
                </p>
              </div>
            </div>

            {/* Pr P P Daniel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr P P Daniel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr P P Daniel</h3>
                <p className="text-primary-600 font-semibold mb-3">1997 - 2001 (4 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr P P Daniel served our church with great commitment for 4 years. 
                  His leadership strengthened our congregation and continued the work 
                  of building a strong foundation in faith and community.
                </p>
              </div>
            </div>

            {/* Pr Raju KJ */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr Raju KJ" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr Raju KJ</h3>
                <p className="text-primary-600 font-semibold mb-3">2001 - 2006 (5 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr Raju KJ led our church for 5 years with wisdom and grace. During 
                  his tenure, the church experienced significant growth in membership 
                  and expanded its ministry outreach to the community.
                </p>
              </div>
            </div>

            {/* Pr Raju CS */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr Raju CS" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr Raju CS</h3>
                <p className="text-primary-600 font-semibold mb-3">2006 - 2009 (3 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr Raju CS served our congregation for 3 years with passion and 
                  dedication. His teaching ministry and pastoral care blessed many 
                  families and strengthened the spiritual foundation of our church.
                </p>
              </div>
            </div>

            {/* Pr Jose Paul */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr Jose Paul" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr Jose Paul</h3>
                <p className="text-primary-600 font-semibold mb-3">2009 - 2012 (3 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr Jose Paul ministered to our church for 3 years with faithfulness 
                  and love. His emphasis on prayer and worship brought renewal to our 
                  congregation and deepened our relationship with God.
                </p>
              </div>
            </div>

            {/* Pr Aby */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr Aby" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr Aby</h3>
                <p className="text-primary-600 font-semibold mb-3">2012 - 2015 (3 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr Aby served our church for 3 years with great commitment. His 
                  leadership focused on discipleship and community building, leaving 
                  a lasting impact on the spiritual growth of our members.
                </p>
              </div>
            </div>

            {/* Pr Roy */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pr Roy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pr Roy</h3>
                <p className="text-primary-600 font-semibold mb-3">2015 - 2018 (3 years)</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pr Roy led our congregation for 3 years with wisdom and compassion. 
                  His ministry emphasized evangelism and outreach, bringing many new 
                  souls to Christ and expanding our church's impact in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Governing Body */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Current Governing Body</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Senior Pastor */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Pastor Suresh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pastor Suresh</h3>
                <p className="text-primary-600 font-semibold mb-3">Senior Pastor</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Leading the congregation with vision and dedication, Pastor Suresh 
                  continues to guide IPC Hebron in its mission to serve God and the community.
                </p>
              </div>
            </div>

            {/* Deacon/Elder 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Church Elder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Church Elder</h3>
                <p className="text-primary-600 font-semibold mb-3">Board Member</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Serving faithfully in church governance and providing spiritual 
                  guidance to support the ministry and vision of IPC Hebron.
                </p>
              </div>
            </div>

            {/* Deacon/Elder 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Church Deacon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Church Deacon</h3>
                <p className="text-primary-600 font-semibold mb-3">Board Member</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Committed to serving the church community and supporting the pastoral 
                  leadership in administrative and spiritual matters.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Note: Please update with actual names and photos of current governing body members.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Word of God</h3>
              <p className="text-gray-600">
                We believe the Bible is the inspired Word of God and the foundation 
                for our faith and practice.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Love & Community</h3>
              <p className="text-gray-600">
                We demonstrate God's love through our relationships and service to 
                one another and our community.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Discipleship</h3>
              <p className="text-gray-600">
                We are committed to making disciples who follow Jesus and share 
                His message with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Denomination Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Pentecostal Faith</h2>
          <div className="bg-primary-50 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              As a Pentecostal church, we embrace the full work of the Holy Spirit 
              in the life of the believer. We believe in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>The baptism of the Holy Spirit with the evidence of speaking in tongues</li>
              <li>The gifts of the Spirit for the edification of the church</li>
              <li>Divine healing and miracles through faith in Jesus Christ</li>
              <li>The importance of prayer and intercession</li>
              <li>Worship that is vibrant, Spirit-led, and heartfelt</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
